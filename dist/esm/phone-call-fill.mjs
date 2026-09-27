export const name="phone-call-fill";
export const id="dl_407488d3406748e09b99";
export const url=new URL("../icons/phone-call-fill.svg?v=f618eee5d724208c2fb066a290586054267dbc77efa32a9b73a0c4fbbcbb5b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
