export const name="share_eta-fill";
export const id="dl_6d4457fe3dcc85d39ced";
export const url=new URL("../icons/share_eta-fill.svg?v=bb3571f6464a22f098704c451b9b487bec15b5aaa1ef160ef12bfcbf8fc1fbef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
