export const name="apparel-fill";
export const id="dl_4007cf890aa8f99b1667";
export const url=new URL("../icons/apparel-fill.svg?v=ee9b8fa9c3cb811e8f08c8daa17bedc9d117ee14fd257e389396baf0608d987c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
