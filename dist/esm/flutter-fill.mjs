export const name="flutter-fill";
export const id="dl_834b8494ff8edba57667";
export const url=new URL("../icons/flutter-fill.svg?v=63606abd35df3d7605c30633ea7a94850843a988cd610a3bb46c693cce21c85e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
