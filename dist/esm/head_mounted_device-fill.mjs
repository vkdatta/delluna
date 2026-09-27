export const name="head_mounted_device-fill";
export const id="dl_531103459dbdcf1c6db9";
export const url=new URL("../icons/head_mounted_device-fill.svg?v=821cf551aef0d546c437b99956824c6f497e83f3966cf6ae7d7bec899aa955d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
