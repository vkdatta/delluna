export const name="escalator-up";
export const id="dl_df6f964906d6476b97a4";
export const url=new URL("../icons/escalator-up.svg?v=a52b289a836c5388f85cc10e636011220840f78ab82473eab3e6bc04acc2003c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
