export const name="bell-slash-thin";
export const id="dl_f36c08cc246c4ada82a2";
export const url=new URL("../icons/bell-slash-thin.svg?v=6a45089ab496f4a30d38f88456de0161667563b5a8030083de50e953a70960b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
