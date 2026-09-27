export const name="clean_hands";
export const id="dl_3f778726e3f7925a6de8";
export const url=new URL("../icons/clean_hands.svg?v=7e67748ba2d8fb56dacf1ee4c34c0a5f9df7c9ff407fa58aa9468d8336baf126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
