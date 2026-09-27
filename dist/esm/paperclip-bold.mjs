export const name="paperclip-bold";
export const id="dl_bcba6a72eb7a4598a944";
export const url=new URL("../icons/paperclip-bold.svg?v=5776702178e2498a8a50f24b773b2c380dc8d20cf6b647a1f00541245bbcd0ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
