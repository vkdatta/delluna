export const name="lucid_2-gamepad-2";
export const id="dl_644039a564ca4ec2ba46";
export const url=new URL("../icons/lucid_2-gamepad-2.svg?v=4719d48e163650c9771e1c958824dfd9ad0efe4cef017c0ac9dc1024b55af3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
