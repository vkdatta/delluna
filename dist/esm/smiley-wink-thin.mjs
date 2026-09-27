export const name="smiley-wink-thin";
export const id="dl_62ed14bee60278b46dfb";
export const url=new URL("../icons/smiley-wink-thin.svg?v=4d22b0832d57006439b91f5b31872fb0c7ef9890b23979fbc1558bab92d73251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
