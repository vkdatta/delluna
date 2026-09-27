export const name="queue";
export const id="dl_b8ec22f82225465f8a4b";
export const url=new URL("../icons/queue.svg?v=bf8afeb9fdd14cb989280bfdcb35d970c986cf98e35276c6aa0fdc657ac12fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
