export const name="push-pin-simple-slash-duotone";
export const id="dl_6e66ebdb8915419787c2";
export const url=new URL("../icons/push-pin-simple-slash-duotone.svg?v=d167ed8db9abe391a3ea01c1c7191903c215c0d296b6ae3498fe519a8b7bfa72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
