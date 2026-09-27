export const name="hand-deposit-thin";
export const id="dl_2a54793c6533452290e1";
export const url=new URL("../icons/hand-deposit-thin.svg?v=41ed30ea33b6e8da5edec8c32631a8c57bae323f10f3111fbd1fdf0df9beafbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
