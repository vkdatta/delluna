export const name="towel-thin";
export const id="dl_77fd6eef36b9c7093fce";
export const url=new URL("../icons/towel-thin.svg?v=fc73c6fb9130ac7918a2c846184ae57e352229b8c4b69572c4205ce480d93f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
