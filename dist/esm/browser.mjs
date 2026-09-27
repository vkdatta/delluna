export const name="browser";
export const id="dl_c49c303f41254c329a9e";
export const url=new URL("../icons/browser.svg?v=510c6c9ade1cf2b7af34e525c54ddafb12fb4e024c559e1d49f8583cf0103f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
