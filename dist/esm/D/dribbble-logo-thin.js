export const name="dribbble-logo-thin";
export const id="dl_0cfea7b3fb1f4e0c894c";
export const url=new URL("../../icons/D/dribbble-logo-thin.svg?v=77450ef9fd32fddc758813dcc4aa9513643199a21c4c139843052e3b214f918a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
