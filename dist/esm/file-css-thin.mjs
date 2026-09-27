export const name="file-css-thin";
export const id="dl_cd1d03a2c4b042ebaac4";
export const url=new URL("../icons/file-css-thin.svg?v=c9152839afc44e26ccd4882f4f7b4f200783bf4a6885622d6f101988c374156f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
