export const name="tram-front";
export const id="dl_786b1bb617a04861b0ea";
export const url=new URL("../icons/tram-front.svg?v=241a35c5942385ea2667316489c81eb1905f293b85a8eb1c79ba90fc2bc27475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
