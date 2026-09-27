export const name="flask-light";
export const id="dl_41645375d29c4204a604";
export const url=new URL("../icons/flask-light.svg?v=c5605fd8867380559c7c9fc31b66155a1c494ec7871e901676423254cddc81cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
