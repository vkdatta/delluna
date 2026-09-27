export const name="bluetooth_drive";
export const id="dl_a9a89e6118be117b1f65";
export const url=new URL("../icons/bluetooth_drive.svg?v=4f1695c36b63f38805bc7e914b6e941a04a63baaf80ca7b15f884bb97bdaad0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
