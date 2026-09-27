export const name="wave-sawtooth-thin";
export const id="dl_5ba44aef07b661588193";
export const url=new URL("../icons/wave-sawtooth-thin.svg?v=09f1091a888898e8c86398498f29862f42ca09e4df8f4ab295af8165e2010d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
