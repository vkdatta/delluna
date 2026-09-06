export const name="lucid_1-circle-arrow-out-down-left";
export const id="dl_5e3dd38a560a44adb441";
export const url=new URL("../icons/lucid_1-circle-arrow-out-down-left.svg?v=19741f1034e5bd6b0d096f4cf7439821f70764feacbdc7c75fa5ff92d1fdd8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
