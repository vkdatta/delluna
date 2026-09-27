export const name="waves-vertical";
export const id="dl_a38473c39365489e9363";
export const url=new URL("../icons/waves-vertical.svg?v=22c6d973ef4f099153d58b9bd9fc91a0a9960ae3ae254bb814e7375ed102dddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
