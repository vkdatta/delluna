export const name="handbag-simple-thin";
export const id="dl_cbbe92d3ac224e1197d3";
export const url=new URL("../icons/handbag-simple-thin.svg?v=8f3ae808c1a792103ab9cca3b6860737330423a99d0ceadb897d213499eed59d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
