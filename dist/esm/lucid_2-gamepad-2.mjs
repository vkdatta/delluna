export const name="lucid_2-gamepad-2";
export const id="dl_644039a564ca4ec2ba46";
export const url=new URL("../icons/lucid_2-gamepad-2.svg?v=155f0d4c7b4e937e2f76d930376582400d8514c5f8925030d6d5d08dbd150db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
