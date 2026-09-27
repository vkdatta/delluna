export const name="quiz";
export const id="dl_48f7d4e5dbb076b93de6";
export const url=new URL("../icons/quiz.svg?v=900afc2264d1d383e22992b17affdde8d701ad1db155bea179a119fd1f1df043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
