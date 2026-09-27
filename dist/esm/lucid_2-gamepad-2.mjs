export const name="lucid_2-gamepad-2";
export const id="dl_644039a564ca4ec2ba46";
export const url=new URL("../icons/lucid_2-gamepad-2.svg?v=d6b4b82d8c9239e1589a5a6eb9eefd5f8bd6dd364bcf94f08e5642281dd259ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
