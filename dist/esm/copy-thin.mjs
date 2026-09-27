export const name="copy-thin";
export const id="dl_09b51f90e5914c67992b";
export const url=new URL("../icons/copy-thin.svg?v=b7c924b8f0c4ef71077eba68194635e636750bdd6eaedcd7ba2ad1b59be57417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
