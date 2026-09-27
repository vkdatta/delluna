export const name="battery-medium-light";
export const id="dl_0ba70f789fc24d81b2db";
export const url=new URL("../icons/battery-medium-light.svg?v=a58eadca94a83bdcd650bec4c8e99764a006dca8766fcd85063e0b3eeddf04b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
