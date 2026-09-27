export const name="push-pin-simple-thin";
export const id="dl_68106e9319bd4ceb8057";
export const url=new URL("../icons/push-pin-simple-thin.svg?v=4fdfb85501676d9fe9e7acabd8a16acf1845185be84171f2f733fca0d91fd2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
