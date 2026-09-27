export const name="picture_in_picture_small";
export const id="dl_b025026605c876b5e7e6";
export const url=new URL("../icons/picture_in_picture_small.svg?v=5b4c26e64ccecf6d544720e7011b826338d1afeda0af5278e2d49a61446806bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
