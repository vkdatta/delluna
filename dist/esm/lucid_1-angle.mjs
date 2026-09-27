export const name="lucid_1-angle";
export const id="dl_245d6e9f0e8a45e88d4b";
export const url=new URL("../icons/lucid_1-angle.svg?v=25db7aa5d2388ff12b69536f8a14d38e96faa4b71c57c02748303a0a1d7499ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
