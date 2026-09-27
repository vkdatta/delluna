export const name="list_alt-fill";
export const id="dl_57dd67a0aaa58b7b7c97";
export const url=new URL("../icons/list_alt-fill.svg?v=46be63de1cecf1d389125385864cf23f7609909a8a479298c9bb46a23000b021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
