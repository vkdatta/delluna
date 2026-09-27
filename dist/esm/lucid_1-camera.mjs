export const name="lucid_1-camera";
export const id="dl_a345e5a9328d4a9ba124";
export const url=new URL("../icons/lucid_1-camera.svg?v=5bc5323b5f15d5995136f47abf4451ced1cad317e3e2da290b4939acf3be0625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
