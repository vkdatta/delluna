export const name="play-pause-duotone";
export const id="dl_2d293f6ddb624220bac5";
export const url=new URL("../icons/play-pause-duotone.svg?v=ebb46a67eed8021028c84b24547ea317dea3a337b2eac5f769cf5ffe310b33a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
