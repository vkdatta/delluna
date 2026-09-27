export const name="restore_page";
export const id="dl_36b8000c6c714bf4180b";
export const url=new URL("../icons/restore_page.svg?v=14bea357ee9d5986dfd36ea49fd1bc5f9f07460bbf217aa396db65f5d7061c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
