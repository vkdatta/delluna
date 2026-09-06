export const name="lucid_2-gamepad-2";
export const id="dl_644039a564ca4ec2ba46";
export const url=new URL("../icons/lucid_2-gamepad-2.svg?v=bd6c625fe7bf3085969b3cb92f28224a91a78c0998cb3a5a5cb87a918b10a625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
