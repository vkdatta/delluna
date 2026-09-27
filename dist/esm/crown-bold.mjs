export const name="crown-bold";
export const id="dl_47144c4d3c5d4e699bde";
export const url=new URL("../icons/crown-bold.svg?v=78a674d44a857c42395d7f2400cf1894a5966daa4005ebcf2238c2ead8248c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
