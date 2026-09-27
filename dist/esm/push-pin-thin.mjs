export const name="push-pin-thin";
export const id="dl_4f70597dd0334cfe8c60";
export const url=new URL("../icons/push-pin-thin.svg?v=7c5ffff034f4698d768ec1a28490783b5b2d821e024ac87bfc92e588364f5e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
