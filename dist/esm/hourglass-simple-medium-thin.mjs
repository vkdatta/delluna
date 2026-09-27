export const name="hourglass-simple-medium-thin";
export const id="dl_a7c0510b802541f59adc";
export const url=new URL("../icons/hourglass-simple-medium-thin.svg?v=04da3667eb28cdda246de6742854461ae34ad1603d54994f88b9acd605596933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
