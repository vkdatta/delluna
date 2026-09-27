export const name="file-ts-bold";
export const id="dl_0dac66fcc84441cfb3cf";
export const url=new URL("../icons/file-ts-bold.svg?v=509c4789976aaea74726a0e5e3671d6337ce385acaeee9710201d1a57c54dfbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
