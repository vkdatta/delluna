export const name="airplane-landing";
export const id="dl_a498e518759d4e948a9f";
export const url=new URL("../icons/airplane-landing.svg?v=3987612bebccfce24aaf1547d72e9ac81b6c1f592c18113bd67372336747278f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
