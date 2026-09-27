export const name="file-jpg-thin";
export const id="dl_385838cf82ca43c68821";
export const url=new URL("../icons/file-jpg-thin.svg?v=c32e4a612d0905d46f0b5ce684701b06fbb973055d4dfb5cd607b4482e3b4123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
