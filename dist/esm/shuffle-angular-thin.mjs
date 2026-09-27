export const name="shuffle-angular-thin";
export const id="dl_5355a5c823546825325c";
export const url=new URL("../icons/shuffle-angular-thin.svg?v=f91953f55f9db6ae5b1e1d64fbc0603bcef505055d0bf68faff90dc169c9789e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
