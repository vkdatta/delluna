export const name="paint-brush-household-light";
export const id="dl_ac92ea2dd45a4a92b47a";
export const url=new URL("../icons/paint-brush-household-light.svg?v=7f3c0b25194bc4b00a1c8eefe8a828af3a3fc8e2ccca21fcc6fd1deb33d71aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
