export const name="plus-circle-light";
export const id="dl_5ba5ea86b6a84d8ca497";
export const url=new URL("../icons/plus-circle-light.svg?v=22dd312d5ee16ba74858e803ba47d6f4d696acfe8adf85c80900fc976b49d688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
