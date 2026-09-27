export const name="file-doc-light";
export const id="dl_0882577dd03240918e26";
export const url=new URL("../icons/file-doc-light.svg?v=b62ed5b0c26dbc78af5c1382f4888cdc48becf6a6892631ff51a60690867c5c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
