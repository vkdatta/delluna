export const name="50mp-fill";
export const id="dl_d934cf5992875fdf3fe4";
export const url=new URL("../icons/50mp-fill.svg?v=30f8ccfca9525e959f89a4fcf52e38eb01fbb6f9b7f5d4f671179ca8d38683ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
