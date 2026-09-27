export const name="youtube-logo-thin";
export const id="dl_80decd288b0185edafe5";
export const url=new URL("../icons/youtube-logo-thin.svg?v=2f74e5d24b8210db28d625cc8081be0da9ec177affeb85669c375ae5a5b64d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
