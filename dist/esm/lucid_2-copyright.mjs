export const name="lucid_2-copyright";
export const id="dl_dd88cd79431f4bafad68";
export const url=new URL("../icons/lucid_2-copyright.svg?v=70570e093f0752d7f59c5aa49d4b6ea8318f2e4770f10fdeac3e5b863eb5a2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
