export const name="attach_file_add";
export const id="dl_9fe88451d86b40bb87c2";
export const url=new URL("../icons/attach_file_add.svg?v=2e4fdddead36a73cfd0edc3027d5dbec9c6ca68dd2614b5fcc68f3c9c80c7f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
