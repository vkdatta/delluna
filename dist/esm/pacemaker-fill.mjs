export const name="pacemaker-fill";
export const id="dl_813161791762d1463b10";
export const url=new URL("../icons/pacemaker-fill.svg?v=5d60c66efd78ed634d4753c624c9da2acf67032f5b7112977c46bb44c24f5b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
