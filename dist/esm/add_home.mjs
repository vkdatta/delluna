export const name="add_home";
export const id="dl_f46b1c7f306bf4d65e2d";
export const url=new URL("../icons/add_home.svg?v=3bc7a74f59187f4051f24b5fc40f39bf5a6bfe31776ad17e4b186cd1bcd45397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
