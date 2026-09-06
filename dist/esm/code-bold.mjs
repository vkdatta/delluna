export const name="code-bold";
export const id="dl_407f90299758456ab66f";
export const url=new URL("../icons/code-bold.svg?v=9ea667d9633ab1e91b17f5779ad379e2bf46f24baca533f5267dd61d8fea7056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
