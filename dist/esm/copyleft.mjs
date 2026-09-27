export const name="copyleft";
export const id="dl_bc4fb1bffde0466cbc67";
export const url=new URL("../icons/copyleft.svg?v=ed320042808396fe4040ef9a24df2315f7d7430bc5130830465976aa49af7ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
