export const name="number-four-thin";
export const id="dl_95f4a96be2d846b79415";
export const url=new URL("../icons/number-four-thin.svg?v=d86ee14ac5f6b104b017fb8915dbd1c3b531328cd7d90fab6469e7c4c814587e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
