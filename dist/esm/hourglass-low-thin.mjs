export const name="hourglass-low-thin";
export const id="dl_db270f1cbbab4accb01b";
export const url=new URL("../icons/hourglass-low-thin.svg?v=c346e2550d1ce44e6fdb4bbc6869cb9f3a3f24f4949bbce04ab8bd6e0db7f162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
